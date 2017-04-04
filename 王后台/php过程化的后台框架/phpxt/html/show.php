<?php
    include 'header.php';
    $id=$_GET['id'];
    $sql="select * from context where id='$id'";
    $data=$l->query($sql)->fetch_all(MYSQLI_ASSOC);
    error_reporting(0);
?>

<link rel="stylesheet" href="../static/css/show.css">

<div class="showbox">
    <table>
        <thead>
            <tr>
                <td colspan="2">
                    <h1><?php echo $data[0][title];?></h1>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><?php echo $data[0][time];?></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">
                    <img src="<?php echo $data[0][image];?>" alt="">
                </td>
            </tr>
            <tr class="text">
                <td colspan="2">
                    <p>
                        <?php echo $data[0][text];?>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>



<?php
    include 'footer.php';
?>
