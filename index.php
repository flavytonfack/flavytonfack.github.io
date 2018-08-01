

<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Caveat+Brush" rel="stylesheet">
</head>


<style>

form {
    width: 800px;
    height: 1400px;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 14px;
    border: solid 2px #ffbfbf;
    font-family: 'Dosis', sans-serif;
    font-size: 20px;
    font-weight: bolder;
}

    form p {
        font-size: 35px;
        font-weight: 900;
        text-align: center;
        margin-bottom: 100px;
        font-family: 'Caveat Brush', cursive
    }

    form span {
        font-size: 35px;
        font-weight: 900;
        font-family: 'Caveat Brush', cursive;

    }

</style>



<body>
<form>

    <p> Results Verification Page, by <?php echo $_POST["firstName"]; ?> </p>

    <span>First Name:</span> <?php echo $_POST["firstName"]; ?> <br> <br> <br>
    <span>Last Name:</span> <?php echo $_POST["lastName"]; ?> <br> <br> <br>
    <span>Address:</span> <?php echo $_POST["address"]; ?> <br> <br> <br>
    <span>City:</span> <?php echo $_POST["city"]; ?> <br> <br> <br>
    <span>State:</span> <?php echo $_POST["state"]; ?> <br> <br> <br>
    <span>Zip Code:</span> <?php echo $_POST["zip"]; ?> <br> <br> <br>
    <span>Education Level:</span> <?php echo $_POST["education"]; ?> <br> <br> <br>
    <span>Income:</span> <?php echo $_POST["income"]; ?> <br> <br> <br>
    <span>Phone Number:</span> <?php echo $_POST["phone"]; ?> <br> <br> <br>
    <span>Password:</span> <?php echo $_POST["password"]; ?> <br> <br> <br>
    <span>Confirm Password:</span> <?php echo $_POST["confirmpassword"]; ?> <br> <br> <br>

</form>





</body>
</html>