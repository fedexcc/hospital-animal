import Navbar from '@/components/ui/Navbar/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <h1 className="text-5xl font-bold text-center">Hospital Animal Dr. Cossia</h1>
        <p className="text-center">
          <b>
              Servicio de urgencia 24 horas, los 365 días del año
          </b>
        </p>
      </main>
    </div>
  );
}

export default App;
