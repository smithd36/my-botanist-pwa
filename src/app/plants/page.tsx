'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plant } from '@/types/plant';

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
 return (
    <div>
      <h1>Plants</h1>
      <ul>
        <li>Plant 1</li>
        <li>Plant 2</li>
        <li>Plant 3</li>
      </ul>
    </div>
  );
}