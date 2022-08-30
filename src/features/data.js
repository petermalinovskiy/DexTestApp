//временное решение, пока сервер не равботает 
export const cafeData = [ 
  {
    id: "111111",
    name: "Cafe",
    address: "ул.Юности д.120",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe1.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111112",
    name: "Cafe",
    address: "ул.25 Октября д.18/5",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe2.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111113",
    name: "Coffe Lattelady",
    address: "ул.Мадинова пер.6 д.28",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe3.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111114",
    name: "Coffe Lattelady",
    address: "ул. Маршала д.5/2",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe4.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111115",
    name: "Cafe",
    address: "ул.Юности д.120",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe5.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111116",
    name: "Cafe",
    address: "ул.Юности д.120",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe1.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111117",
    name: "Cafe",
    address: "ул.25 Октября д.18/5",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe2.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111118",
    name: "Coffe Lattelady",
    address: "ул.Мадинова пер.6 д.28",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe3.png'), //при серверном запросе добавить значение uri
  },
  {
    id: "111119",
    name: "Coffe Lattelady",
    address: "ул. Маршала д.5/2",
    coordinates: "пока нет",
    description: "string",
    image: require('../../assets/img/listCafe4.png'), //при серверном запросе добавить значение uri
  },
]

export const iconData = [
  {
    image: require('../../assets/img/iconMilk.png'),
    BGColor: '#C8D9AF',
    text: '15мл',
    id: 4441
  },
  {
    image: require('../../assets/img/iconCoffeeGrains.png'),
    BGColor: '#CFE6EC',
    text: '25%',
    id: 4442
  },
  {
    image: require('../../assets/img/iconWaterDrop.png'),
    BGColor: '#F7ECDA',
    text: '25мл',
    id: 4443
  },
  {
    image: require('../../assets/img/iconTemperature.png'),
    BGColor: '#EDF3C0',
    text: '95`',
    id: 4444
  },
  {
    image: require('../../assets/img/iconPreasure.png'),
    BGColor: '#D2D2D2',
    text: '15б',
    id: 4445
  },
]

export const cafeDrinkData = [
  {
    id: 222221,
    cofeId: 33333,
    name: 'Latte macchiato',
    price: 20,
    favorite: true,
    imagesPath: require('../../assets/img/drink1.png')
  },
  {
    id: 222222,
    cofeId: 3333,
    name: 'Latte macchiato',
    price: 20,
    favorite: false,
    imagesPath: require('../../assets/img/drink2.png')
  },
  {
    id: 222223,
    cofeId: 33333,
    name: 'Latte macchiato',
    price: 20,
    favorite: false,
    imagesPath: require('../../assets/img/drink2.png')
  },
  {
    id: 22224,
    cofeId: 3333,
    name: 'Latte macchiato',
    price: 20,
    favorite: true,
    imagesPath: require('../../assets/img/drink1.png')
  },
]

export const drinkData = {
  id: '121212',
  productName: "Сappuccino",
  price: 30,
  cofeId: "123123",
  cofeName: "Итальянский эспрессо – это бархатистая плотная пенка с золотистым отливом, покрывающая всю поверхность кофе. Из Италии с любовью.",
  favarite: true,
  attribute: [
    {
      id: "141414",
      description: "string",
      iconType: "string"
    }
  ],
  imagesPath: require('../../assets/img/drinkCardImage.png')
}
