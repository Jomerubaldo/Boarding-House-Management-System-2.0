import BoardersProvider from './contexts/BoardersProvider';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <BoardersProvider>
        <AppRouter />
      </BoardersProvider>
    </>
  );
}

export default App;
