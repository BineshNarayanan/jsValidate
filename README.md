# jsValidate

This custom-validator plugin is intended for showing non-intrusive validation messages.

include the jquery.js and jquery.validate.js in your script section. (Note : order of your include matters) 
eg. as shown below
``` javascript
<script type="text/javascript" src="jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="jquery.validate.min.js"></script>
```
After that just attach classes to your input elements, add a attribute "data-labelname" and rest the plugin will take care of validation and related messages.

###Currently it supports the following validations
- mandatory fields 
- numeric fields 
- alphanumeric fields 
- alphabets and space only fields 
- email 
- minlength 
- maxlength 

###Classes available
- mandatory-select
- mandatory-text
- digits
- minlength-%length%
- maxlength-%length%
- alphabetsandspace
- alphanumeric
- email

###How to use these classes?
**Case 1** : A mandatory text field which should only take alphabets and space, minimum length of the data should be 4 characters.

**Usage**:
```html
  <input type="text" name="name" class="mandatory-text alphabetsandspace minlength-4" data-labelname="Name"></input>
```
**Case 2** : A mandatory text field which should only take numbers and it should be atleast a 10 digit number.

**Usage**:
```html
  <input type="text" name="mobilenumber" class="mandatory-text digits minlength-10"  data-labelname="Mobile Number"></input>
```
**Case 3** : A mandatory dropdown 

**Usage**:
```html
  <select class="mandatory-select" data-labelname="Number Of Members">
  <option value="">Select</option
  <option value="1">One</option
  <option value="2">Two</option
  </select>
```

###Demo
https://embed.plnkr.co/DU6QtCdfdE0nmwMsVtTY/
