<?php
    include '../php/session.php';
    include "../php/dbdata.php";
error_reporting(0);
    $id=$_GET['id'];
    $l->set_charset('utf8');
    $sql="select * from user where id='$id'";
    $r=$l->query($sql);
    $data=$r->fetch_all(MYSQLI_ASSOC);
?>
<link rel="stylesheet" href="../static/css/xgg.css">

<table>
    <form action="../php/xgghehe.php" method="post" enctype="application/x-www-form-urlencoded">
        <tr>
            <td>修改管理员账号：</td>
            <td><input type="text" name="name" value="<?php
                    echo $data[0][name];
                ?>"></td>
        </tr>
        <tr>
            <td>修改管理员密码：</td>
            <td><input type="password" name="pass" value="<?php
                    echo $data[0][pass];
                ?>"></td>
        </tr>
        <tr>
            <td>修改其权限：</td>
            <td><input type="text" value="<?php
                    echo $data[0][role];
                ?>" name="role"></td>
        </tr>
        <input style="width: 0px;height: 0px;opacity: 0;" type="text" name="id" value="<?php
            echo $id;
        ?>">
        <tr>
            <td colspan="2"><input type="submit" value="提交修改"></td>
        </tr>
    </form>
</table>