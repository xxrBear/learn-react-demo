export default function App() {
  function handleClick() {
    alert("你点我干嘛！");
  }

  return (
    <div>
      <button onClick={handleClick}>点我</button>
    </div>
  );
}
