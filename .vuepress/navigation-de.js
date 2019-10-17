const navigationDe = {
  sidebar: [
    ['/de/', 'Start'],
    ['/de/artikel/', 'Artikel'],
    ['/de/installationen/', 'Installationen'],
    ['/de/ionic/', 'Ionic'],
    ['/de/lernjournal/', 'Lernjournal'],
    ['/de/module/', 'Module'],
    {
      title: 'Wiki',
      children: [
        ['/de/wiki/', 'Start'],
        {
          title: 'Datentypen',
          children: [
            ['/de/wiki/datentypen/', 'Start'],
            ['/de/wiki/datentypen/array', 'Array'],
            ['/de/wiki/datentypen/boolean', 'Boolean'],
            ['/de/wiki/datentypen/integer', 'Integer'],
            ['/de/wiki/datentypen/string', 'String'],
          ]
        },
        {
          title: 'Divers',
          children: [
            ['/de/wiki/divers/', 'Start'],
            {
              title: 'API',
              children: [
                ['/de/wiki/divers/api/', 'Start'],
                {
                  title: 'REST',
                  children: [
                    ['/de/wiki/divers/api/rest/', 'Start'],
                    ['/de/wiki/divers/api/rest/hateoas', 'HATEOAS'],
                  ],
                },
                ['/de/wiki/divers/api/soap', 'SOAP'],
              ],
            },
            {
              title: 'Continuous delivery',
              children: [
                ['/de/wiki/divers/continous_delivery/', 'Start'],
                ['/de/wiki/divers/continous_delivery/deployment', 'Deployment'],
              ],
            },
            {
              title: 'Protokolle',
              children: [
                ['/de/wiki/divers/protokolle/', 'Start'],
                ['/de/wiki/divers/protokolle/http', 'HTTP'],
              ],
            },
            ['/de/wiki/divers/http-request', 'HTTP Request'],
            ['/de/wiki/divers/database_migration', 'Database migration'],
            ['/de/wiki/divers/dom', 'DOM'],
            ['/de/wiki/divers/ssh', 'SSH'],
            ['/de/wiki/divers/bitmapgrafik', 'Bitmapgrafik'],
            ['/de/wiki/divers/vectorgrafik', 'Vektorgrafik'],
            ['/de/wiki/divers/yagni', 'YAGNI'],
          ]
        },
        {
          title: 'Hacking',
          children: [
            ['/de/wiki/hacking/', 'Start'],
            ['/de/wiki/hacking/man-in-the-middle-attacke', 'Man in the middle Attacke'],
            ['/de/wiki/hacking/session-hijacking', 'Session Hijacking'],
            ['/de/wiki/hacking/sql-injection', 'SQL injection'],
            ['/de/wiki/hacking/xsrf', 'XSRF'],
            ['/de/wiki/hacking/xss', 'XSS'],
          ]
        },
        {
          title: 'Programmiersprachen',
          children: [
            ['/de/wiki/programmiersprachen/', 'Start'],
            {
              title: 'Datenbanken',
              children: [
                ['/de/wiki/programmiersprachen/datenbanken/', 'Start'],
                {
                  title: 'Relational',
                  children: [
                    ['/de/wiki/programmiersprachen/datenbanken/relational/', 'Start'],
                    {
                      title: 'Key Concept',
                      children: [
                        ['/de/wiki/programmiersprachen/datenbanken/relational/key_concept/', 'Start'],
                        ['/de/wiki/programmiersprachen/datenbanken/relational/key_concept/foreign_key', 'Foreign Key'],
                        ['/de/wiki/programmiersprachen/datenbanken/relational/key_concept/primary_key', 'Primary Key'],
                        ['/de/wiki/programmiersprachen/datenbanken/relational/key_concept/super_key', 'Super Key'],
                      ],
                    },
                    ['/de/wiki/programmiersprachen/datenbanken/relational/begriffe', 'Begriffe'],
                    ['/de/wiki/programmiersprachen/datenbanken/relational/normalisierung', 'Normalisiserung'],
                  ],
                },
                ['/de/wiki/programmiersprachen/datenbanken/sql', 'SQL'],
                ['/de/wiki/programmiersprachen/datenbanken/dbms', 'DBMS'],
                ['/de/wiki/programmiersprachen/datenbanken/er-diagramme', 'ER Diagramme'],
                ['/de/wiki/programmiersprachen/datenbanken/erm', 'ERM'],
                ['/de/wiki/programmiersprachen/datenbanken/datenbanken-index', 'Index'],
                ['/de/wiki/programmiersprachen/datenbanken/netzwerkartig', 'Netzwerkartig'],
                ['/de/wiki/programmiersprachen/datenbanken/objektorientiert', 'Objektorientiert'],
                ['/de/wiki/programmiersprachen/datenbanken/objektrational', 'Objektrational'],
                ['/de/wiki/programmiersprachen/datenbanken/dokumentorientiert', 'Dokumentorientiert'],
                ['/de/wiki/programmiersprachen/datenbanken/hierarchisch', 'Hierarchisch'],
                ['/de/wiki/programmiersprachen/datenbanken/migration-vs-datamigration-vs-seeds', 'Migration vs Datamgiration vs Seeds'],
              ],
            },
            {
              title: 'htaccess',
              children: [
                ['/de/wiki/programmiersprachen/htaccess/', 'Start'],
                ['/de/wiki/programmiersprachen/htaccess/automatic-redirect', 'Automatic Redirect'],
              ],
            },
            {
              title: 'HTML',
              children: [
                ['/de/wiki/programmiersprachen/html/', 'Start'],
                ['/de/wiki/programmiersprachen/html/grundlagen', 'Grundlagen'],
                ['/de/wiki/programmiersprachen/html/tipps', 'Tipps'],
              ],
            },
            {
              title: 'JavaScript',
              children: [
                ['/de/wiki/programmiersprachen/javascript/', 'Start'],
                {
                  title: 'Libraries',
                  children: [
                    ['/de/wiki/programmiersprachen/javascript/libraries/', 'Start'],
                    {
                      title: 'jQuery',
                      children: [
                        ['/de/wiki/programmiersprachen/javascript/libraries/jquery/', 'Start'],
                        ['/de/wiki/programmiersprachen/javascript/libraries/jquery/selectors', 'Selektoren'],
                      ],
                    },
                    ['/de/wiki/programmiersprachen/javascript/libraries/notifit', 'NotifIT'],
                    ['/de/wiki/programmiersprachen/javascript/libraries/vue.js', 'Vue.js'],
                  ],
                },
                ['/de/wiki/programmiersprachen/javascript/datentypen', 'Datentypen'],
                ['/de/wiki/programmiersprachen/javascript/documentation', 'Dokumentation'],
                ['/de/wiki/programmiersprachen/javascript/jquery', 'jQuery'],
                ['/de/wiki/programmiersprachen/javascript/json', 'JSON'],
                ['/de/wiki/programmiersprachen/javascript/json_web_token', 'JWT'],
                ['/de/wiki/programmiersprachen/javascript/nodejs', 'NodeJS'],
                ['/de/wiki/programmiersprachen/javascript/statische_codeanalyse', 'Statische Codeanalyse'],
              ],
            },
            {
              title: 'PHP',
              children: [
                ['/de/wiki/programmiersprachen/php/', 'Start'],
                {
                  title: 'Beispiele',
                  children: [
                    ['/de/wiki/programmiersprachen/php/beispiele/', 'Start'],
                    ['/de/wiki/programmiersprachen/php/beispiele/login', 'Login'],
                    ['/de/wiki/programmiersprachen/php/beispiele/util.php', 'util.php'],
                  ],
                },
                {
                  title: 'Session',
                  children: [
                    ['/de/wiki/programmiersprachen/php/session/', 'Start'],
                    ['/de/wiki/programmiersprachen/php/session/cache', 'Cache'],
                    ['/de/wiki/programmiersprachen/php/session/flashmessages', 'Flashmessages'],
                  ],
                },
                {
                  title: 'Sicherheit',
                  children: [
                    ['/de/wiki/programmiersprachen/php/sicherheit/', 'Start'],
                    ['/de/wiki/programmiersprachen/php/sicherheit/hashing', 'Passwort Hashing'],
                  ],
                },
                ['/de/wiki/programmiersprachen/php/allgemein', 'Allgemein'],
                ['/de/wiki/programmiersprachen/php/datentypen', 'datentypen'],
                ['/de/wiki/programmiersprachen/php/function', 'Funktionen'],
                ['/de/wiki/programmiersprachen/php/objektorientiert', 'Objektorientierung'],
                ['/de/wiki/programmiersprachen/php/docblock', 'DocBlock'],
                ['/de/wiki/programmiersprachen/php/dto', 'DTO'],
                ['/de/wiki/programmiersprachen/php/popo', 'POPO'],
                ['/de/wiki/programmiersprachen/php/mvc', 'MVC'],
                ['/de/wiki/programmiersprachen/php/solid', 'SOLID'],
                ['/de/wiki/programmiersprachen/php/dependency-inversion-principle', 'Dependency Inversion Principle'],
                ['/de/wiki/programmiersprachen/php/interface-segregation-principle', 'Interface Segregation Principle'],
                ['/de/wiki/programmiersprachen/php/liskov-substitution-principle', 'Liskov Substitution Principle'],
                ['/de/wiki/programmiersprachen/php/open-closed-principle', 'Open-Closed Principle'],
                ['/de/wiki/programmiersprachen/php/services', 'Services'],
                ['/de/wiki/programmiersprachen/php/deployment', 'Deployment'],
                ['/de/wiki/programmiersprachen/php/dependency-injection-container', 'Dependency Injection Container'],
                ['/de/wiki/programmiersprachen/php/crud', 'CRUD'],
                ['/de/wiki/programmiersprachen/php/validierung', 'Validierung'],
                ['/de/wiki/programmiersprachen/php/view-decorator', 'View Decorator'],
                ['/de/wiki/programmiersprachen/php/xml', 'XML'],
              ],
            },
            {
              title: 'Programmiertipps',
              children: [
                ['/de/wiki/programmiersprachen/programmiertipps/', 'Start'],
                ['/de/wiki/programmiersprachen/programmiertipps/dao', 'DAO'],
                ['/de/wiki/programmiersprachen/programmiertipps/data-mapper', 'Data Mapper'],
                ['/de/wiki/programmiersprachen/programmiertipps/designpattern', 'Design Pattern'],
                ['/de/wiki/programmiersprachen/programmiertipps/dokumentationsarten', 'Dokumentationsarten'],
                ['/de/wiki/programmiersprachen/programmiertipps/dto', 'DTO'],
                ['/de/wiki/programmiersprachen/programmiertipps/immutable', 'Immutable'],
                ['/de/wiki/programmiersprachen/programmiertipps/internationalisierung', 'i18n'],
                ['/de/wiki/programmiersprachen/programmiertipps/orm', 'ORM'],
                ['/de/wiki/programmiersprachen/programmiertipps/refactoring', 'Refactoring'],
                ['/de/wiki/programmiersprachen/programmiertipps/semantic-versioning', 'Semantic Versioning'],
                ['/de/wiki/programmiersprachen/programmiertipps/single-responsibility-principle', 'SRP'],
                ['/de/wiki/programmiersprachen/programmiertipps/versioncontrol', 'Versionskontrolle'],
              ],
            },
            {
              title: 'Testing',
              children: [
                ['/de/wiki/programmiersprachen/testing/', 'Start'],
                {
                  title: 'PHPUnit',
                  children: [
                    ['/de/wiki/programmiersprachen/testing/phpunit/', 'Start'],
                    ['/de/wiki/programmiersprachen/testing/phpunit/installation', 'Installation'],
                    ['/de/wiki/programmiersprachen/testing/phpunit/testarten', 'Testarten'],
                    ['/de/wiki/programmiersprachen/testing/phpunit/database', 'Datenbank'],
                    ['/de/wiki/programmiersprachen/testing/phpunit/fake', 'Fake'],
                    ['/de/wiki/programmiersprachen/testing/phpunit/mock', 'Mock'],
                    ['/de/wiki/programmiersprachen/testing/phpunit/stub', 'Stub'],
                  ],
                },
                ['/de/wiki/programmiersprachen/testing/test_coverage', 'Test coverage'],

              ],
            },
            ['/de/wiki/programmiersprachen/assembly', 'Assembly'],
            ['/de/wiki/programmiersprachen/c', 'C'],
            ['/de/wiki/programmiersprachen/xml', 'XML'],
            ['/de/wiki/programmiersprachen/css', 'CSS'],
            ['/de/wiki/programmiersprachen/framework', 'Framework'],
            ['/de/wiki/programmiersprachen/requestverlauf', 'Requestverlauf'],
            ['/de/wiki/programmiersprachen/this', 'this'],
          ],
        },
        {
          title: 'Wordpress',
          children: [
            ['/de/wiki/wordpress/', 'Start'],
            {
              title: 'Security',
              children: [
                ['/de/wiki/wordpress/security/', 'Start'],
                ['/de/wiki/wordpress/security/seo-spam-attacke_aufraeumen', 'SEO Spam Attacke aufräumen'],
              ],
            },
          ],
        },
        ['/de/wiki/321regel', '321-Regel'],
        ['/de/wiki/apigen', 'API gen'],
        ['/de/wiki/backend', 'Backend'],
        ['/de/wiki/browser', 'Browser'],
        ['/de/wiki/bytesystem', 'ByeSystem'],
        ['/de/wiki/carousel', 'Carousel'],
        ['/de/wiki/cms', 'CMS'],
        ['/de/wiki/composer', 'Composer'],
        ['/de/wiki/computer', 'Computer'],
        ['/de/wiki/critical_rendering_path', 'Critical Rendering Path'],
        ['/de/wiki/datenbank', 'Datenbank'],
        ['/de/wiki/email', 'Email'],
        ['/de/wiki/escaping', 'Escaping'],
        ['/de/wiki/gui', 'GUI'],
        ['/de/wiki/human-readable', 'Human Readable'],
        ['/de/wiki/iperka', 'Iperka'],
        ['/de/wiki/opensource', 'OpenSource'],
        ['/de/wiki/os', 'OS'],
        ['/de/wiki/pebcak', 'PEBCAK'],
        ['/de/wiki/portanalyse', 'Portanalyse'],
        ['/de/wiki/programmierer', 'Programmierer'],
        ['/de/wiki/programmierparadigmen', 'Programmierparadigmen'],
        ['/de/wiki/root', 'Root'],
        ['/de/wiki/sata', 'S-ATA'],
        ['/de/wiki/server-_und_client-seitig', 'Server- und Client-Seitig'],
        ['/de/wiki/smtp', 'SMTP'],
        ['/de/wiki/statik_dynamik', 'Statik und Dynamik'],
        ['/de/wiki/svn', 'SVN'],
        ['/de/wiki/url', 'URL'],
        ['/de/wiki/utf8', 'UTF8'],
        ['/de/wiki/ux', 'UX'],
        ['/de/wiki/webseitenstruktur', 'Webseitenstruktur'],
        ['/de/wiki/welcome', 'Welcome'],
        ['/de/wiki/wysiwyg', 'WYSIWYG'],
        ['/de/wiki/xss', 'XSS'],
        ['/de/wiki/links', 'Nice To Know'],
      ],
    }, {
      title: 'Tutorials',
      children: [
        ['/tutorials/', 'Start'],
        ['/tutorials/php/', 'PHP (en)'],
        ['/tutorials/xampp/', 'XAMPP (en)']
      ]
    },
    ['https://darker.dev', 'Über mich'],
  ],
};
module.exports = navigationDe;
