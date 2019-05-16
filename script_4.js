const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("les entrepreneurs qui sont nés dans les années 70");
  function check_age(entrepreneurs)
  {
    let number =null;

    for(let i = 0; i < entrepreneurs.length; i++) {

        if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year <= 1980) {
            number++;
        }
    }

    console.log(number);
  }
  check_age(entrepreneurs);

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

  console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
  function identity_array(entrepreneurs)
  {
    let my_array = null;

    for(let i = 0; i < entrepreneurs.length; i++) {
        my_array  += [entrepreneurs[i].first + entrepreneurs[i].last];
    }
    return my_array;
  }
  console.log(identity_array(entrepreneurs));

  //---------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------

  console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

  function how_old(entrepreneurs)
  {
      let a;
    for(let i = 0; i < entrepreneurs.length; i++) {
        let age = 2019 - entrepreneurs[i].year;
      a= console.log(entrepreneurs[i].name + entrepreneurs[i].last + ' ' +"à" + ' '+ age);
    }
    return a;
  }
  how_old(entrepreneurs);