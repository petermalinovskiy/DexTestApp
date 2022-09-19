interface  IIconData {
  image: any,
  BGColor: string,
  text: string,
  id: number
}

export const iconData: IIconData[] = [
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

