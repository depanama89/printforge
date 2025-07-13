import ModelCard from "../component/ModelCard";
import { getAllModels } from "../lib/models";

export default async function ModelsPage() {
  const models = await getAllModels();

  return (
    <div className="px-4 py-8 lg:px-35 mx-auto">
      <h1 className="mb-8 text-3xl font-bold ">All models</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
