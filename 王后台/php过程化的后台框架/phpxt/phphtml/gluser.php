<?php
    include '../php/session.php';
    include '../php/dbdata.php';
    error_reporting(0);
    $sql='select * from user';
    $r=$l->query($sql);
    $data=$r->fetch_all(MYSQLI_ASSOC);
    for($i=0;$i<count($data);$i++){
        $str.="<tr><td>".$data[$i][id]."</td><td>".$data[$i][name]."</td><td>".$data[$i][pass]."</td><td>".$data[$i][role]."</td><td><a href='../php/delg.php?id=".$data[$i][id]."'>删除</a></td><td><a href='xgg.php?id=".$data[$i][id]."'>修改</a></td></tr>";
    }
?>
<link rel="stylesheet" href="../static/css/gllm.css">
<table>
    <thead>
    <tr>
        <td>ID</td>
        <td>管理员</td>
        <td>密码</td>
        <td>权限</td>
        <td colspan="2">操作</td>
    </tr>
    </thead>
    <tbody>
        <?php
            echo $str;
        ?>
    </tbody>
</table>

