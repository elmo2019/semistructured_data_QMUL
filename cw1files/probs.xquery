<html>
<body>
<table border="1">
  <tr>
    <th>Target</th>
    <th>Successor</th>
    <th>Probability</th>
  </tr>
{
let $target := collection('./?select=*.xml')//s//w[lower-case(normalize-space())='has']
let $successor := $target/following-sibling::w[1]

for $uniquesuccessor in distinct-values($successor)
let $UQgroup := $successor[.=$uniquesuccessor]
let $SUinall := collection('./?select=*.xml')//s//w[.=$uniquesuccessor]
let $pro := count($UQgroup) div count($SUinall)
order by $pro descending

return
<tr>
   <td>{'has'}</td>
   <td>{$uniquesuccessor}</td>
   <td>{round($pro,2)}</td>
 </tr>


}
</table>
</body>
</html>