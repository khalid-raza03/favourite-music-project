App.js (has data) 

    ↓ passes data + id + handleClick 
    function

MusicCard (displays data)

    ↓ user clicks button

MusicCard calls handleClick(id)

    ↓ event goes back up

App.js updates the correct song using the id

    ↓ new data flows back down
    
All components re-render with updated data

array.map((yourVariableName, index) => ...)

```jsx
array.map((yourVariableName, index) => ...)

```