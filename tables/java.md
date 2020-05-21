## Java Commands and Snippets
| Action                                           | Command(s)                                                                                                             |
|--------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Compile                                          | <i>(Add Java to system PATH variable)</i><br/>`javac <package>/<class>.java`                                           |
| Run                                              | `java <package>.<class>`<br/>`java <package>.<class> <arg0> <arg1> <arg2>`                                             |
| Compile with libraries                           | `javac -cp .:<library1>.jar:<library2>.jar <package>/<class>.java`                                                     |
| Run with libraries                               | `java -cp .:<library1>.jar:<library2>.jar <package>.<class>`<br/><i>(Replace all colons with semicolon on Windows)</i> |
| Run war file with embedded engine (e.g. Jenkins) | `java -jar <filename>.war --httpPort=8080`                                                                             |
| Generate JavaDocs                                | `javadoc -d <Javadoc-destination-path> <class>.java`                                                                   |
