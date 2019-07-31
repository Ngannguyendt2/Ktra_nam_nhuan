function ktra(){
    let year=parseInt(document.getElementById('year').value);
    if(year%4==0)
    {
        if(year%100==0)
        {
            if(year%400==0)
            {
                alert('nam' +year +' la nam nhuan');
            }
            else {
                alert('nam '+year+ ' khong phai nam nhuan');
            }

        }
        else {
            alert('nam '+year +' la nam nhuan');
        }
    }
else {
        alert('nam '+year+ ' khong phai nam nhuan');
    }
}

