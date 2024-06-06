'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plant } from '@/types/plant';
import HorizontalMenu from '@/components/HorizontalMenu';
import ThreeDButton from '@/components/ThreeDButton';

export default function Page() {
  /**
   * THIS IS THE FINAL IMPLEMENTATION
   * --------------------------------
   * Uncomment this block and remove the placeholder code below
   * --------------------------------
   * 
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch('/api/plants');
        const data = await response.json();

        console.log('Fetched plants data:', data); // Log the fetched data

        if (Array.isArray(data)) {
          setPlants(data); // Adjust according to the logged response structure
        } else {
          console.error('Error: Invalid data format');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching plants:', error);
        setLoading(false);
      }
    }

    fetchPlants();
  }, []);

  const handleSelectPlant = (plant: Plant) => {
    router.push(`/plants/${plant.id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Plants</h1>
      <ul>
        {plants.map(plant => (
          <li key={plant.id} onClick={() => handleSelectPlant(plant)}>
            {plant.common_name ? plant.common_name : plant.scientific_name}
          </li>
        ))}
      </ul>
    </div>
  );
  */

  const handleAddPlant = () => {
    console.log('Add plant button clicked');

    // Bring up the search window to find a plant?
  };

 return (
  <HorizontalMenu plants={['PLANTS1', 'plants2', 'plants3', 'plants4','PLANTS1', 'plants2', 'plants3', 'plants4','PLANTS1', 'plants2', 'plants3', 'plants4']} onSelect={plant => console.log('Selected plant:', plant)} />
  );
}