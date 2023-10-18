/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Message {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Message> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
