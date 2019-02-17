[![npm version](https://badge.fury.io/js/mcsub.svg)](https://www.npmjs.com/package/mcsub)

## 🍔 McSub – Client Side MailChimp Subscriptions

McSub (Mailchimp Subscriptions) is a tiny < 1.4kb (gzipped) vanilla JavaScript ES6 implementation that acts a simple wrapper for client side email subscriptions with Mailchimp. McSub enables an ajax-like integration for email subscriptions using MailChimp and is a drop-in replacement to the jQuery dependant, monolothic embedded form script that MailChimp requires you to include.

[View Demo](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHkICYA+QHg3AVfYFlqAZQCuAIwAEACn4ZoAYUIQsABwmixcagCcIK4hHoBKFgHoOnADpoWKzgBUlcCRGcY0EmAA9sK2BNowCUENCQB3JWpCT0wxWDcAKwwvAFooCABrGE8sMRgAE3yCnLkoCThxLV19QzQ4FjFtThE4CDQAcwksUqjlFXwJACUYDHyJYkJs-NpqERwGDAN6CXcx9phiccmJPxF2toCPFgwJQm0YMABeSxASYhU4RFNTfYnxfDosUxV3Wj8AT1MWGoFTEN3GGG062I1xAAH04u4MjdOABxCBvMRmDBWGzfXFsJrWawsfIQABuLnysOBoPB1CgGDgcFhoKqEDyKOsEgkLDAtG0WBW1CWaFhdweT1MjQgXmItCg+BaAEYAMz4dJwYgpbqYdYfWhfNk6Dkwb60LXgtC0ckYdL5RYwXE8nksNoqESbYj-FQwWEwbrQK3YP03ACi-AAggBJAAy4L8GGoMEICqK2lhYYYMG0EjDgbKo3y52Z4Iwnpmhr8G1DIECYC5HhdDU98o83t9rPEWAxwZwXc0Js5IGdLp5GnZnKbrulrfoo9dZMpEGpNxLKnocBg9MZzNh68325A5W9sFhZLgif+iGtaCPnDMS9HZn5goJpiflBAW9gItqCEQEA1UQAA2EAAF8KHQEM8HwBIECoOhs2YQDTAAKjQ6wQnEPMfFUWBrDQ0xiTQO8wmCEFxCkG4AGJaXEG4KAkYBuQkFoc0QCQbnyagMBAjBlTEXiAAYYGVAAOcT2BgcSwAAFhgdgxFVAB2cTGIkZ4hhgABHEQIHOfJWM1YhOJuVUAE5lRUkCRhUsBhI0rThj0gyClY+hozQDEpCMFjp000xcN8fxAk8WB5k2VYJAPOpsi1f50g6Q4vN7AKJlcfAYAiphiHwBLYHwMQBXTCRLgkAByZUVC8CQHTgSYxlTe42gyCqAG5WMgjy0A0HtiF85jWJ5LSwzw6sAiCMQ53bbxNiidx9mSiImHUbtXFaZYtUhYg4GGrZMum4g23wNo720AAJex+FjMquJAWNaFGNp2huTqm26jx6FEahk2ZXz-LHCQkLgBUYA1Wh2ikCqJyHbIfr+uAKqMd6x1G8bQqmmaT0Sl7DmBqtYEYfaMrgIqZtO0icyum67puWHdDyIyQFRiRPsOMNtG0AUAf2kagoAeV9Dx5E3MG+YJuowYhqGYcqOG8y5gVkfawLgvw7cPooVjPmrRhBsBl19pB6WoEh6HRY1xgVbVsaQs1-b0ftyaJCOtscaSzpll1onNbHUnyeO+hKfOmnbvK+n1uIN6uuscCUesL9degHM8DEDA8nIKgfxgP9NzwdgQMQayIKgkBMBwWCtGZJP6EYFDbnYIam26KE2hSYqg6wTjhJq97wJI-L5cZ7JDZ+QoXs49he68VnulSMIVwmKeLJn-vrCHwcR9dmbtbQTfJ2yd1PWbnlx7JDpOJUmqJGVOS+7jjfjW3-BYq3U+diLF6UnlFROOVNej997P1NBIV+8ANxxSykrXMhs6Bm20JxQy69gHD1AeAy8h4h6-XgM4OBCoBScXaOcJgKDa6qBTtoPA1cELfmyrnUUAEQAqWLhBAAulQJKGQAKoHLjBQC9ExBfhENocggEJSPGeCINAKgMjtANF8QRAABYS+BlT4HYB+VwxAgSUTEPgHs+94Jfg7LgQC7J9DsPAkAA)

## Feature Requests
McSub is approaching v1.0 with additional features, bug fixes and more. If you have a feature request or something you would like to see in v1 please submit an issue. 

### Install

`yarn add mcsub`

### HTML

McSub will automatically add a robot input to your `form` and dynamically modify it to fit the prerequisites MailChimp requires in their embedded forms which this means you will only need the bare minimum boiler HTML subscription form when you're using McSub, example:
```html
    <div id="form-wrapper-id">
       <form action="https://*.list-manage.com/subscribe/post">
          <input type="email" name="EMAIL" placeholder="Email">
          <button type="submit" name="subscribe">
             Submit
          </button>
          <div id="response" style="display:none"></div>
       </form>
    </div>
```
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

```js
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
```

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

## Contributions

Contributions and feedback are welcome.

## License

[MIT](LICENSE).
