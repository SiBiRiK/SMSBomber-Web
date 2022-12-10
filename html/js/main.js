$(document).on("click", "#submit", function () {
  if ($("input[name='number']").val() && $("input[name='loops']").val()) {
    $.ajax({
      method: 'GET',
      url: '/attack',
      data: {
        number: $("input[name='number']").val(),
        loops: $("input[name='loops']").val()
      },
      dataType: 'json',
      success: function (response) {
        if (response.success == true) {
          document.getElementById('submit').innerHTML = 'Остановить атаку';
          document.getElementById('submit').id = 'stop'
          Swal.fire({
            icon: 'success',
            title: 'OK',
            text: response.text,
            footer: '<a href="https://t.me/svpgcorporation" target="_blank">Мы в Telegram</a>'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: response.text,
            footer: '<a href="https://t.me/svpgcorporation" target="_blank">Мы в Telegram</a>'
          });
        }
      }
    });
    return false;
  }
});

$(document).on("click", "#stop", function () {
  $.ajax({
    method: 'GET',
    url: '/stop',
    data: {
      number: $("input[name='number']").val()
    },
    dataType: 'json',
    success: function (response) {
      if (response.success == true) {
        document.getElementById('stop').innerHTML = 'Атака';
        document.getElementById('stop').id = 'submit'
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: response.text,
          footer: '<a href="https://t.me/svpgcorporation" target="_blank">Мы в Telegram</a>'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: response.text,
          footer: '<a href="https://t.me/svpgcorporation" target="_blank">Наш Telegram</a>'
        });
      }
    }
  });
});q