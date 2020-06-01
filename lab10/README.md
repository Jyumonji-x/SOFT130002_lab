# lab10

-------

许同樵 19302010015

## Exercise7

   ![exercise7_1](../screenshot/Exercise7_1.png)  

   ![exercise7_2](../screenshot/Exercise7_2.png)
   
The first way of connecting the Mysql service is achieved by using a PDO object. It created a PDO object and connect the MySQL service by the provided function. To some extent, it's object-oriented.

The second way of connecting the Mysql service is achieved by directly using the mysqli functions. Its connection is created by "mysqli_connect()" method and is used to search data by "mysqli_query()" method. It's more procedure-oriented compared to the former way.

## Exercise8

   ![exercise8](../screenshot/Exercise8.png)

   ![exercise8_1](../screenshot/Exercise8_1.png)

The "outputArtists()" function is used to list the given artists given by Mysql. Once an artist data is found, it would create an "<a>" element which contains the information of the artist. The element would be active if the artist id can be found. And the href attribute would contain the artist id.

The "outputPaintings()" function is used to output the paintings on the right side of the page. Once the id is caught, the function would search the artist's painting from the Mysql service. And the painting-showing task would be completed by calling "outputSinglePainting()" function.

The "outputSinglePainting()" function is used to show the found paintings. It's realized by echo the elements.

## Exercise9

3 ways to execute sql code: mysql, mysqli, pdo

Using mysqli is suggested while the mysql method is no longer suggested.

By using the Prepared Statements, the executing command and the assignment command can be separated, so it's easier to modify and read.