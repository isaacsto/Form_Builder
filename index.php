<!DOCTYPE html>
<html>
<head>
    <title>HTML Form Generator</title>
</head>
<body>
    <h1>HTML Form Generator</h1>
    <form id="formGenerator">
        <label for="inputTagName">HTML Tag Name:</label>
        <input type="text" id="inputTagName" name="tagname" placeholder="e.g., div">

        <label for="inputContent">Content:</label>
        <input type="text" id="inputContent" name="content" placeholder="e.g., Hello, World!">

        <button type="button" id="generateButton">Generate HTML</button>
    </form>

    <div id="generatedHTML">
        <!-- The generated HTML code will appear here -->
    </div>

    <script src="generate-html.js"></script>
</body>
</html>
