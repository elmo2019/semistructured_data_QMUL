<html>
<body>
<table border="1">
  <tr>
    <th>Target</th>
    <th>Successor</th>
    <th>Frequency</th>
  </tr>
{
let $doc := collection('./?select=*.xml')
for $target in $doc//s//w
where $target/lower-case(normalize-space(text()))="has"

for $UniqueSuccessor in distinct-values (data($target/following-sibling::w[1]))
let $USgroup := data($target/following-sibling::w[1])[.=$UniqueSuccessor]
group by $UniqueSuccessor
order by count($USgroup) descending


return
<tr>
   <td>{distinct-values (data($target))}</td>
   <td>{$UniqueSuccessor}</td>
   <td>{count($USgroup)}</td>
 </tr>


}
</table>
</body>
</html>