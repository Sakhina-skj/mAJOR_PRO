document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
  document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', function() {
          const downloadLink = this.getAttribute('data-download');
          // Create a temporary link element
          const link = document.createElement('a');
          link.href = downloadLink;
          // Specify the download attribute and trigger click event
          link.setAttribute('download', '');
          link.click();
          // Remove the temporary link element
          link.remove();
      });
  });
});
