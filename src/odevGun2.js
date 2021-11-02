function bineKadarAsalSayiSirala() {
    for (let i = 2; i < 1000; i++)
            {
                let sayi = i;
                let sayac = 0;


                for (let j = 2; j < sayi; j++)
                {
                    if (sayi % j == 0)
                    {
                        sayac++;
                        break;
                    }

                }
                if (sayac == 0)
                {
                    sayac = 0;
                    console.log(sayi)
                }

            }
}

function arkadasSayi(number1, number2) {
    let result= 0;
    let  result2 = 0;
    for (let i = 1; i < number1; i++) {
      if (number1 % i == 0) {
        result += i;
        console.log("Birinci sayi bölenleri : " + i);
      }
    }
    
    for (let i = 1; i < number2; i++) {
      if (number2 % i == 0) {
        result2 += i;
        console.log("İkinci sayi bölenleri : " + i);
      }
    }
    
    if (result == number2 && result2 == number1) {
      console.log("Arkadaş Sayı");
    } else {
      console.log("Arkadaş Sayı Değil");
    }
  }

  function findPrime(...params) {   
              
    for (let index = 0; index < params.length; index++) {
        let sayac2 = 0;

        for (let i = 2; i < params[index]; i++)
        {
            if (params[index] % i == 0)
            {
                sayac2++;
                
                break;
            }

        }
        if (sayac2 == 0)
        {
            console.log(params[index])
        }
        sayac2=0;
        
    }
        
    
  }
function mukemmelSayilar() {
    for (let i = 1; i < 1000; i++)
    {
        let toplam = 0;

        for (let j = 1; j < i; j++)
        {
            if (i % j == 0)
            {
                toplam = toplam + j;
                
            }

        }
        if (toplam == i)
        {
            toplam = 0;
            console.log(i);
        }

    }
}
//mukemmelSayilar();
//findPrime(3,5,10,66,7,91,2,17)
//arkadasSayi(220,284)
//bineKadarAsalSayiSirala();