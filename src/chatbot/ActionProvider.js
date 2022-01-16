class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello friend.");
      this.addMessageToState(message);
    };

    query1 = () => {
      const message = this.createChatBotMessage("Please contact us at: mail: customerservice@grocerystore.com or Can chat with us here. If you are not satisfied with the resolution provided by us, then please write us at officer@grocerystore.com");
      this.addMessageToState(message);
    };

    query2 = () => {
      const message = this.createChatBotMessage("You can find products in 2 easy ways: 1.Search  2.Shop by category  Click on the search bar present in top of the screen. Type 'Apple'> see the list of results> Click on 'ADD button'> 1 quantity of the product will be added to basket. If you need to add more quantities of a product, click on + icon.");
      this.addMessageToState(message);
    };

    query3 = () => {
      const message = this.createChatBotMessage("Yes, we would be able to guide you on how to avail corparate discount. Please get in touch with us. You can chat with us. You could send a mail to customerservice@grocerystore.com");
      this.addMessageToState(message);
    };

    query4 = () => {
      const message = this.createChatBotMessage("You can quickly check product related offers from home page.");
      this.addMessageToState(message);
    };

    query5 = () => {
      const message = this.createChatBotMessage("Please get in touch with us. You can chat with us or you could send a mail to customerservice@grocerystore.com");
      this.addMessageToState(message);
    };

    // query = () => {
    //   const message = this.createChatBotMessage("");
    //   this.addMessageToState(message);
    // };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;