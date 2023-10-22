const checkboxForm = document.getElementById('checkbox-form');
const resultDiv = document.getElementById('result');
const resultImage1 = document.getElementById('result-image1');
const resultImage2 = document.getElementById('result-image2');
const submitButton = document.getElementById('submit-button');
const downloadLink = document.getElementById('download-link-a');

checkboxForm.addEventListener('change', updateResult);
submitButton.addEventListener('click', showImage);

function updateResult() {
    const selectedOptions = Array.from(checkboxForm.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    if (selectedOptions.length === 0) {
        resultDiv.textContent = 'No option selected.';
    } 
    else {
        resultDiv.textContent = 'Selected options: ' + selectedOptions.join(', ');
        resultDiv.style.fontFamily='Phudu';
        resultDiv.style.fontSize='large'
        resultDiv.style.color='#D83F31';
        resultDiv.style.margin="30px 0px"
    }
}
    
function showImage() {
    const selectedOptions = Array.from(checkboxForm.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    if (selectedOptions.length === 0) {
        resultDiv.textContent = 'No option selected.';
        resultDiv.style.fontFamily='Phudu';
        resultDiv.style.fontSize='large'
        resultDiv.style.color="#D83F31";
        resultDiv.style.margin="30px 0px"
        resultImage1.style.display = 'none';
        resultImage2.style.display = 'none';
        downloadLink.style.display = 'none';
    } else {
        resultDiv.textContent = 'Selected options: ' + selectedOptions.join(', ');

        if (selectedOptions.includes('Option 1') && selectedOptions.includes('Option 3')) {
            resultImage1.style.display = 'none';
            resultImage2.style.display = 'block';
            downloadLink.style.display = 'block';
            downloadLink.href = 'path/to/downloadable/image3.jpg';
            
        } else if (selectedOptions.includes('Option 1')) {
            resultImage1.style.display = 'none';
            resultImage2.style.display = 'none';
            downloadLink.style.display = 'block';
            downloadLink.href = 'path/to/downloadable/image3.jpg';
            // Set the download link's href attribute to the actual download URL.
        }
        else {
            resultImage1.style.display = 'none';
            resultImage2.style.display = 'none';
            downloadLink.style.display = 'none';
        }
    }
}

