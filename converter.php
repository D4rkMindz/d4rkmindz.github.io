<?php

$originalDirectory = __DIR__ . '/old/';
$destinatedDirectory = __DIR__ . '/new/';
$originalExtension = '.txt';
$destinatedExtension = '.md';

if (is_dir($destinatedDirectory)) {
  rrmdir($destinatedDirectory);
}
$files = scan($originalDirectory, $originalExtension);

foreach ($files as $file) {
  $destination = str_replace($originalDirectory, $destinatedDirectory, $file);
  $destination = str_replace($originalExtension, $destinatedExtension, $destination);

  convert($file, $destination);
}

function convert($file, $destination)
{
  $content = file_get_contents($file);

  $map = [
    '\*\*(.*?)\*\*' => '**$1**', // bold
    '(?<!https\:)\/\/(.*?)\/\/' => '*$2*', // italics
    '\_\_(.*?)\_\_' => '_$1_', // underline
    '\<del\>(.*?)\<\/del\>' => '~~$1~~', // strikethrough
    '\\\\' => "\n", // newline
    '\=\=\=\=\=\=\s(.*?)\s\=\=\=\=\=\=' => '# $1', // heading 2
    '\=\=\=\=\=\s(.*?)\s\=\=\=\=\=' => '## $1', // heading 2
    '\=\=\=\=\s(.*?)\s\=\=\=\=' => '### $1', // heading 3
    '\=\=\=\s(.*?)\s\=\=\=' => '#### $1', // heading 4
    '\=\=\s(.*?)\s\=\=' => '##### $1', // heading 5
    '\<\/Code.*?\>' => '```', // closing code tag
    '\<\/code.*?\>' => '```', // closing code tag
  ];

  $methods = [
    '\[\[(.*?)\|(.*?)\]\]' => 'replace_url', // url
    '\{\{\:(.*?)\|(.*?)\}\}' => 'replace_image', // image
    '\{\{\s\:(.*?)\|(.*?)\}\}' => 'replace_image', // image
    '\<Code(?>\:(\w+)|).*?\>' => function ($language = null) {
      return '```' . $language;
    },
    '\<code(?>\:(\w+)|).*?\>' => function ($language = null) {
      return '```' . $language;
    },
    '(?:\^\s.*?\^)' => 'replace_table_header',
  ];

  $content = call_replace_elements($map, $content);
  $content = call_replace_methods($methods, $content);

  $info = pathinfo($destination);
  if (!is_dir($info['dirname'])) {
    mkdir($info['dirname'], 0777, true);
  }

  file_put_contents($destination, $content);
}

function replace_table_header($tableHeader)
{
  $header = str_replace('^', '|', $tableHeader);

  $columns = explode('^', $tableHeader);

  // the first and last element is always empty
  array_shift($columns);
  array_pop($columns);
  $separator = '|';
  foreach ($columns as $column) {
    $count = strlen($column);
    // only subtract two if column header has a space before and after.
    if ($count >= 3) {
      $count -= 2;
    }
    $dashes = str_repeat('-', $count);
    $separator .= " {$dashes} |";
  }

  return "{$header}\n{$separator}";
}

function replace_url($url, $name)
{
  // look for links with http(s)://
  if (preg_match('/http[s]{0,1}\:\/\//', $url)) {
    return "[${name}]($url)";
  }

  // look for links with mailto:
  if (preg_match('/mailto\:/', $url)) {
    return "[${name}]($url)";
  }

  $urlParts = explode(':', $url);
  $link = '/' . implode('/', $urlParts);

  if (preg_match('/\?/', $link)) {
    // remove everything after ? (former size)
    $link = explode('?', $link)[0];
  }

  return "[{$name}]({$link})";
}

function replace_image($url, $name)
{
  if (empty($name)) {
    $name = 'No alt text available';
  }

  return '!' . replace_url($url, $name);
}

/**
 *
 *
 * @param array $map
 * @param string $content
 * @return string|string[]|null
 */
function call_replace_elements(array $map, string $content)
{
  foreach ($map as $search => $replace) {
    $content = preg_replace("/{$search}/", $replace, $content);
    if (empty($content)) {
      throw new InvalidArgumentException("Regex {$search} is not valid. Trying to replace it with {$replace} failed.");
    }
  }

  return $content;
}

/**
 *
 *
 * @param array $methods
 * @param $content
 * @return string
 */
function call_replace_methods(array $methods, $content): string
{
  foreach ($methods as $search => $callback) {
    $matches = [];
    $success = preg_match_all("/{$search}/", $content, $matches);
    if ($success) {
      $mapped = [];
      // group all results by its regex, not its regex capture group
      foreach ($matches as $match) {
        foreach ($match as $key => $value) {
          $mapped[$key][] = $value;
        }
      }
      // call the callback for each occurence
      foreach ($mapped as $parameters) {
        $completeMatch = $parameters[0];
        if (count($parameters) > 1) {
          // The whole match isn't required.
          array_shift($parameters);
        }
        $replacedMatch = call_user_func_array($callback, $parameters);
        $content = str_replace($completeMatch, $replacedMatch, $content);
      }
    }
  }

  return $content;
}

function scan($target, $extension)
{
  $result = [];
  if (is_dir($target)) {

    $files = glob($target . '*', GLOB_MARK); //GLOB_MARK adds a slash to directories returned

    foreach ($files as $file) {
      $scan = scan($file, $extension);
      $result = array_merge_recursive($result, $scan);
    }

    return $result;
  }

  if (is_file($target)) {

    $info = pathinfo($target);
    $matchesExtension = '.' . $info['extension'] === $extension;
    if ($matchesExtension) {
      if (is_dir($info['dirname'] . '/' . $info['filename'])) {
        rename($target, $info['dirname'] . '/' . $info['filename'] . '/README.txt');
        $target = $info['dirname'] . '/' . $info['filename'] . '/README.txt';
      }

      $result[] = $target;
    }
  }

  return $result;
}

function rrmdir($src)
{
  $dir = opendir($src);
  while (false !== ($file = readdir($dir))) {
    if (($file != '.') && ($file != '..')) {
      $full = $src . '/' . $file;
      if (is_dir($full)) {
        rrmdir($full);
      } else {
        unlink($full);
      }
    }
  }
  closedir($dir);
  rmdir($src);
}
