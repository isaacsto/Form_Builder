<!DOCTYPE html>
<html>
<head>
    <title>HTML Form Generator</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>HTML Form Generator</h1>
    <form id="formGenerator">
    <div class="form-container">
        <div class="form-groups">

        
        <div class="form-group">
        <label for="input">Container:</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., div">

        <label for="inputClass">Class:</label>
        <input type="text" class="input" name="class" placeholder="if any">

        <br/>
        </div>

        <div class="form-group">
        <label for="inputTagName">Form:</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., form">

        <label for="inputClass">Class:</label>
        <input type="text" class="input"name="class" placeholder="e.g. form">

        <label for="inputContent">Method:</label>
        <input type="text" class="input" name="content" placeholder="e.g. post">

        <br/>   
    </div>

<div class="form-group">
        <label for="inputTagName">Header</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., h2">

        <label for="inputClass">Class:</label>
        <input type="text" class="input" name="class" placeholder="if any">

        <br/>   
        </div>

        <div class="form-group">
        <label for="inputTagName">Form-group:</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., div">

        <label for="inputClass">Class:</label>
        <input type="text" class="input" name="class" placeholder="e.g. form=group">

        <label for="inputTagName">Label:</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., label">

    </div>
        
        <div class="form-group">

        <label for="inputTagName">For:</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., e-mail">


        <label for="inputClass">Class:</label>
        <input type="text" class="input" name="class" placeholder="if any">
 
        <label for="inputTagName">Input:</label>
        <input type="text" class="input" name="tagname" placeholder="e.g., div">
</div>

<div class="form-group">
        
        <label for="inputClass">Type:</label>
        <input type="text" class="input" name="class" placeholder="if any">

        <label for="inputClass">Class:</label>
        <input type="text" class="input" name="class" placeholder="if any">
        
        <label for="inputClass">Id:</label>
        <input type="text" class="input" name="class" placeholder="if any">

        <br/>   
    </div>
    </div>

        <button type="button" id="generateButton">Generate HTML</button>

</div>
    </form>

    <div id="generatedHTML">
        <!-- The generated HTML code will appear here -->
    </div>

    <script src="generate-html.js"></script>
</body>
</html>
