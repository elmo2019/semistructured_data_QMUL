<html>
<body>
<table border="1">
  <tr>
    <th>Target</th>
    <th>Successor</th>
    
  </tr>
{
(:
let $doc := collection('./?select=*.xml')
for $target in $doc//s//w
where $target/lower-case(normalize-space(text()))="has"
:)
let $doc := collection('./?select=*.xml')
for $target in $doc//s//w
where $target/lower-case(normalize-space(text()))="has"
return 

  <tr>
   <td>{data($target)}</td>
   <td>{data($target/following-sibling::w[1])}</td>
   </tr>
}
</table>
</body>
</html>