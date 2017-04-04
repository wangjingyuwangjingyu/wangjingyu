<?php
    include '../php/session.php';
    include '../php/dg.php';
    $hjn=new fn();
    $mmm=$hjn->fn2(0,0,0);
?>
<link rel="stylesheet" href="../static/css/gllm.css">
<table>
    <thead>
        <tr>
            <td>ID</td>
            <td>title</td>
            <td>imageURL</td>
            <td>parentId</td>
            <td colspan="2">操作</td>
        </tr>
    </thead>
    <tbody>
        <?php
            echo $mmm;
        ?>
    </tbody>
</table>

