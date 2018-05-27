## McSub – MailChimp Subscriber

McSub (Mailchimp Subscriptions) is a tiny < 1.2kb (gzipped) vanilla JavaScript ES6 implementation that acts a simple wrapper for client side email subscriptions with Mailchimp. McSub enables an Ajax-like integration for email subscriptions using MailChimp and is as a replacement to the jQuery dependant monolothic embedded form script that MailChimp requires you to include.

The original score for this implementation before I added falvor was from [Michiel Vandewalle](https://github.com/michiel-vandewalle) with his component the [Mailchimp AJAX form-submit](https://github.com/michiel-vandewalle/Mailchimp-AJAX-form-submit-vanillaJS).

<br>
Codepen Example: https://codepen.io/panoply/pen/erqbwx

### Install

`yarn add mcsub`

### HTML

McSub will automatically add a robot input to your `form` and dynamically modify it to fit the prerequisites MailChimp requires in their embedded forms which means you only need the bare minimum boiler HTML subscription form:

    <div id="form-wrapper-id">
       <form action="https://*.list-manage.com/subscribe/post">
          <input type="email" name="EMAIL" placeholder="Email">
          <button type="submit" name="subscribe">
             Submit
          </button>
          <div id="response"></div>
       </form>
    </div>

The McSub Subscriber HTML form is vastly different to the standard HTML form that Mailchimp generally requires from you. This gives you more freedom to customise the style of the form and as an added bonus McSub will also re-write your form to the Mailchimp defaults as a fallback.
<br>
> **Ensure** `https` protocol is used in the form action


### Initialise
Simply add McSub to your build `import Mcsub from 'mcsub';` and from here call it with the following options:

    new Mcsub('#form-wrapper-id', {
	    user:  'abcdefghijklmnopqrstuvwxyz',
	    list:  '123456789',
	    callback:  'cb',
	    reponse:  '#response',
        onSubmit(){
            console.log(this.button); // Example
        },
        complete(){
            console.log(this.inputs); // Example
        }
    });

## Options
**element**<br>
The `element` option is a **required** option that select the forms wrapper element. You must always wrap your form within a `div` and use an attriubute selector.

**user**<br>
The `user` option is a **required** option that is the user id of your Mailchimp account. You can obtain your user id in the copy/paste section of the embedded form generators form `action` in your Mailchimp account.

**list**<br>
The `list` option is a **required** option that is the email list id. The email list id is the list in which your subscriptions will be saved to. You can obtain in the copy/paste section of the embedded form generators form `action` in your Mailchimp account

**callback**<br>
The `callback` option allows you to define a custom callback parameter. It defaults to `cb` but you can change it incase `cb` is being used by something else.

**response**<br>
The `response` option defaults to an element within your `<form>` with the `id` of `#response`. Mailchimp will return validation responses which show up within this element.

**onSubmit**<br>
The `onSubmit()` option function is run on form submission. Access the Forms elements via `this` to get things like the form submit button, inputs etc.

**complete**<br>
The `complete()` option function is run after form submission has completed and validation text has been appended within the `response` element. Access the form via `this` to get things like the form submit button, inputs etc. The reason complete runs after validation text is appended is because only then are we sure that we have received the response from MailChimp.

## Todo

 - Better Documentation
 - Tests

## License

[MIT](LICENSE).
