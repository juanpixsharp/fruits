export class Pagina {
    meta: Meta = new Meta();
    products: Product[]=[];
  }
  
  export class Meta {
    count: number = 0;
    limit: number = 0;
    page: number = 0;
    previous_url: string = '';
    next_url: string = '';
  }
  
  export class Product {
    name: string = '';
    product_url: string = '';
    constructor(name:string, product_url:string){
        this.name=name;
        this.product_url=product_url;
    }
  }
  