class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello") || lowercase.includes("hi")) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("I want to contact customer service") || lowercase.includes("to contact customer service")) {
        this.actionProvider.query1();
      }

      if (lowercase.includes("How can I find and add product to my basket ??")) {
        this.actionProvider.query2();
      }

      if (lowercase.includes("Can I avail corparate discount?") || lowercase.includes("any discount?")) {
        this.actionProvider.query3();
      }

      if (lowercase.includes("I want to know the current offers") || lowercase.includes("current offers") || lowercase.includes("to know current offers")) {
        this.actionProvider.query4();
      }

      if (lowercase.includes("I want to purchase products in bulk") || lowercase.includes("to buy products in bulk") || lowercase.includes("buy products in bulk")) {
        this.actionProvider.query5();
      }

      // if (lowercase.includes("")) {
      //   this.actionProvider.query6();
      // }

    }
  }
  
  export default MessageParser;