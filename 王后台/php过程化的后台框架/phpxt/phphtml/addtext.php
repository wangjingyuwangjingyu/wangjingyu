<?php
    include "../php/session.php";
    include '../php/dbdata.php';
    include "../php/dg.php";
    $fnnj=new fn();
    $datas=$fnnj->fn1(0,0,0);
?>
<link rel="stylesheet" href="../static/css/addtext.css">
<script type="text/javascript" charset="utf-8" src="../utf8-php/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="../utf8-php/ueditor.all.min.js"> </script>
<script type="text/javascript" charset="utf-8" src="../utf8-php/lang/zh-cn/zh-cn.js"></script>
<table>
    <form action="../php/addtexthehe.php" method="post" enctype="application/x-www-form-urlencoded">
        <thead>
            <tr>
                <td colspan="2">添加新内容</td>
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
                <td>添加标题：</td>
                <td><input type="text" name="title" placeholder="..."></td>
            </tr>
            <tr>
                <td>添加特定图片：</td>
                <td><input type="text" name="image" placeholder="http://..."></td>
            </tr>
            <textarea id="text1" name="text" id="" cols="30" rows="10" style="width: 0px;height: 0px;opacity: 0;"></textarea>
            <tr>
                <td colspan="2">添加内容</td>
            </tr>
            <tr>
                <td colspan="2">
                    <div>
                        <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
                    </div>
                </td>
            </tr>
            <tr>
                <td>添加时间：</td>
                <td><input type="text" name="time" placeholder="不需要指定格式..."></td>
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
    },300)
</script>

