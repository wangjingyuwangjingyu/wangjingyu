<?php
    include '../php/session.php';
    include '../php/dbdata.php';
    $l->set_charset('utf8');
    error_reporting(0);
    $sql="select * from context";
    $r=$l->query($sql);
    $data=$r->fetch_all(MYSQLI_ASSOC);
    for($i=0;$i<count($data);$i++){
        $str.="<tr><td>".$data[$i][id]."</td><td>".$data[$i][title]."</td><td>".$data[$i][text]."</td><td>".$data[$i][image]."</td><td>".$data[$i][time]."</td><td>".$data[$i][pid]."</td><td><a href='../php/deltext.php?id=".$data[$i][id]."'>删除</a></td><td><a href='bjtext.php?id=".$data[$i][id]."'>编辑</a></td></tr>";
    }
?>
<link rel="stylesheet" href="../static/css/gltext.css">
<table>
    <form action="" method="post" enctype="application/x-www-form-urlencoded">
        <thead>
            <tr>
                <td>ID</td>
                <td>标题</td>
                <td>文本</td>
                <td>图片</td>
                <td>上次编辑时间</td>
                <td>内容归属ID</td>
                <td colspan="2">操作</td>
            </tr>
        </thead>
        <tbody>
            <?php
                echo $str;
            ?>
        </tbody>
    </form>
</table>
