<?php
    include '../php/session.php';
    include "../php/dbdata.php";
    include '../php/dg.php';
    $id=$_GET['id'];
    $l->set_charset('utf8');
    $sql="select * from context where id='$id'";
    $r=$l->query($sql);
    $datasss=$r->fetch_all(MYSQLI_ASSOC);
    $fnnj=new fn();
    $datas=$fnnj->fn1(0,0,0,$datasss[0][pid]);
?>
<link rel="stylesheet" href="../static/css/addtext.css">
<script type="text/javascript" charset="utf-8" src="../utf8-php/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="../utf8-php/ueditor.all.min.js"> </script>
<script type="text/javascript" charset="utf-8" src="../utf8-php/lang/zh-cn/zh-cn.js"></script>
<table>
    <form action="../php/bjhehe.php" method="post" enctype="application/x-www-form-urlencoded">
        <thead>
        <tr>
            <td colspan="2">修改内容</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>指定父ID：</td>
            <td>
                <select name="pid" id="">
                    <option value="">请选择栏目</option>
                    <?php
                    echo $datas;
                    ?>
                </select>
            </td>
        </tr>
        <tr>
            <td>修改标题：</td>
            <td><input type="text" name="title" value="<?php
                    echo $datasss[0][title];
                ?>"></td>
        </tr>
        <tr>
            <td>修改特定图片地址：</td>
            <td><input type="text" name="image" value="<?php
                    echo $datasss[0][image];
                ?>"></td>
        </tr>
        <textarea id="text1" style="width: 0px;height: 0px;opacity: 0;" name="text" id="" value="<?php
            echo $datasss[0][text];
        ?>" cols="30" rows="10" style="width: 0px;height: 0px;opacity: 0;"></textarea>
        <tr>
            <td colspan="2">修改文本内容</td>
        </tr>
        <tr>
            <td colspan="2">
                <div>
                    <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
                </div>
            </td>
        </tr>
        <input style="width:0px;height: 0px;opacity: 0;" type="text" name="id" value="<?php
            echo $id;
        ?>">
        <tr>
            <td>修改时间：</td>
            <td><input type="text" name="time" value="<?php
                    echo $datasss[0][time];
                ?>"></td>
        </tr>
        <tr>
            <td colspan="2" class="bn1"><input type="submit" value="提交"></td>
        </tr>
        </tbody>
    </form>
</table>
<script type="text/javascript">
    var text=document.querySelector('#text1');
    var ue = UE.getEditor('editor');
    window.setInterval(function(){
        if(ue.isFocus()){
            text.value=ue.getContent();
        }
    },300);
</script>
