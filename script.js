$(document).ready(function () {
  $('#registrationForm').on('submit', function (e) {
      e.preventDefault();

      const name = $('#name').val();
      const email = $('#email').val();
      const phone = $('#phone').val();
      const address = $('#address').val();

      $('#outputName').text(name);
      $('#outputEmail').text(email);
      $('#outputPhone').text(phone);
      $('#outputAddress').text(address);

      $('#output').show();
  });
});