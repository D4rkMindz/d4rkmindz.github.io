# SEO-Spam-Attacke aufräumen
Eine SEO-Spam-Attacke ist wenn der Inhalt auf der Webseite mit versteckten Links befüllt wird. Diese Nutzen das gute Ranking der befallenen Webseite dann für sich selber. Ein Link, welcher auf einer vertrauenswürdigen Webseite ist, muss ja gut sein...


Eine solche Webseite lässt sich mit zwei SQL Queries einfach aufräumen:


```
SELECT * 
FROM wp_postmeta
WHERE meta_value LIKE '%position:absolute%'
```
Und
```
SELECT * 
FROM wp_posts
WHERE post_content LIKE '%position:%'
OR post_title LIKE '%position:%'
OR post_excerpt LIKE '%position:%'
```
Danach unbedingt noch einen Dump machen und in dem Datendump nach "position:absolute" suchen. Es sollte, abgesehen vom Wordpress CSS oder Theme CSS kein weiterer Eintrag gefunden werden.


```
mysqldump -u user -p --no-create-info —-extended-insert=FALSE user > dump.sql
```