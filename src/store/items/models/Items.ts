export interface Items {
  items : ItemInterface[];
}

export interface ItemInterface {
  id: string
  name: string
  price: number
  count: number
}