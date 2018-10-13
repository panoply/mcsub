[![npm version](https://badge.fury.io/js/mcsub.svg)](https://www.npmjs.com/package/mcsub)

## 🍔 McSub – Client Side MailChimp Subscriptions

McSub (Mailchimp Subscriptions) is a tiny < 1.4kb (gzipped) vanilla JavaScript ES6 implementation that acts a simple wrapper for client side email subscriptions with Mailchimp. McSub enables an ajax-like integration for email subscriptions using MailChimp and is a drop-in replacement to the jQuery dependant, monolothic embedded form script that MailChimp requires you to include.

The original score for this implementation was from [Michiel Vandewalle](https://github.com/michiel-vandewalle) with his component the [Mailchimp AJAX form submit](https://github.com/michiel-vandewalle/Mailchimp-AJAX-form-submit-vanillaJS).

[Codepen Example](https://codepen.io/panoply/pen/erqbwx)

### Install

`yarn add mcsub`

### HTML

McSub will automatically add a robot input to your `form` and dynamically modify it to fit the prerequisites MailChimp requires in their embedded forms which this means you will only need the bare minimum boiler HTML subscription form when you're using McSub, example:

    <div id="form-wrapper-id">
       <form action="https://*.list-manage.com/subscribe/post">
          <input type="email" name="EMAIL" placeholder="Email">
          <button type="submit" name="subscribe">
             Submit
          </button>
          <div id="response" style="display:none"></div>
       </form>
    </div>

As you can see, the McSub embedded subscribe form is vastly different to the standard HTML form that Mailchimp requires from you. The McSub approach enables you to customise the style of the form to best fit your integration.

> As an added bonus McSub will also re-write your form to the Mailchimp defaults as a fallback.

**Please Note**:

- The from `action` does not require the full list path. End your action list path at `/post`.
- Always ensure the **https** protocol is used in the form action.
- The response `div` element should should have `style="display:none;` attribute.
- The form does not use `<input type="button">` so instead use `<button type="submit">`.
- The name of the email input should be capitalized as EMAIL for the API response to work correctly.


### Initialise
Simply add McSub to your build `import Mcsub from 'mcsub';` and initialise it according to your requirements.

    new Mcsub('#form-wrapper-id', {
	    user:  'abcdefghijklmnopqrstuvwxyz',
	    list:  '123456789',
	    callback:  'cb',
	    reponse:  '#response',
        onInit(){
            console.log(this.element) // Example
        },
        onSubmit(){
            console.log(this.button); // Example
        },
        onSuccess(){
            console.log('Subscribe Sucess'); // Example
        },
        onError(){
            console.log('Subscribe Error'); // Example
        },
        complete(){
            console.log(this.inputs); // Example
        }
    });

## Options
**element**<br>
The `element` option is a **required** option that is the selector of the form wrapper. You must always wrap your form within a `div`.

**user**<br>
The `user` option is a **required** option of the user id for your Mailchimp account. You can obtain your user id in the copy/paste section of the embedded form generators form `action` in your Mailchimp account.

**list**<br>
The `list` option is a **required** option that is your subscription email list id. The email list id is the list in which your subscriptions will be saved to. You can obtain this id in the copy/paste section of the embedded form generators form `action` of your Mailchimp account

**callback**<br>
The `callback` option allows you to define a custom callback parameter. It defaults to `cb` but you can change it incase `cb` is being used by something else.

**response**<br>
The `response` option defaults to an element within your `<form>` with the `id` of `#response`. Mailchimp will return responses which show up within this element and depending on the response type, a class of either `.error` or `.success` will be added to the element giving you additional styling. For best practice always add a `style="display:none;"` attribute to the response element. McSub will remove this upon response callback by default.

**onInit()**<br>
The `onInit()` callback option function is run on init after the form subit listener is applied.

**onSubmit()**<br>
The `onSubmit()` callback option function is run on form submission. Access the Forms elements via `this` to get things like the form submit button, inputs etc.

**onSuccess()**<br>
The `onSuccess()` callback option function is run if subscription was successful.

**onError()**<br>
The `onError()` callback option function is run if subscription was unsuccessful and/or encounted an error.

**complete()**<br>
The `complete()` callback option function is run after form submission has completed and validation text has been appended within the `response` element. Access the form via `this` to get things like the form submit button, inputs etc. The reason complete runs after validation text is appended is because only then are we sure that we have received the response from MailChimp.

## Option Functions
The 3 option functions `onInit()`, `onSubmit()` and `complete()` can be used to access elements within the form. Using `this` within the each function gives to access these additional elements.

| Callback | Description  |
|--|--|
|`this.element` | Returns the wrapper element (`#from-wrapper-id`) |
|`this.inputs` | Returns an array of `input` fields within the form |
|`this.button` | Returns the the submit button element |
|`this.response` | Returns the `response` div element |


## Todo
 - Better Documentation
 - Tests

## License

[MIT](LICENSE).
