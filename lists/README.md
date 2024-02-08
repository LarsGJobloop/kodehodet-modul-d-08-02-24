# Rendering Lists in React

Rendering lists of items is an important concept to get a grasp of. It is used in everything from rendering a list of products for an E-Commerce site, messages in a Chat application, posts and comments on a Blog site, even the subject tags for a blog post is a list and likely rendered as such.

## Code Snippet

- React can render lists of JSX Elements

  ```jsx
  function Listing() {
    return (
      <ul>
        {[
          <li>Monday</li>,
          <li>Tuesday</li>,
          <li>Wednesday</li>,
          <li>Thursday</li>,
          <li>Friday</li>,
          <li>Saturday</li>,
          <li>Sunday</li>,
        ]}
      </ul>
    );
  }
  ```

- JavaScript has the Array.map method which can be used for generating these lists of JSX Elements from a list of data

  ```jsx
  function Listing() {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return (
      <ul>
        {weekdays.map((day) => {
          return <li>{day}</li>;
        })}
      </ul>
    );
  }
  ```

- Something to note is React's incapability to differentiate between the individual components when rendered through a list. Look in the console for the error message to get a link to details. To fix this we need to provide a special properties, key, to enable React to keep a stable reference to the items in a list. This just need to be stable, and unique among it's sibling items, no need for global uniqueness.

  ```jsx
  function Listing() {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return (
      <ul>
        {weekdays.map((day) => {
          // Since the name of the day's are unique, we can just use those
          return <li key={day}>{day}</li>;
        })}
      </ul>
    );
  }
  ```

## Links

- [React Dev: Rendering Lists](https://react.dev/learn/rendering-lists)
