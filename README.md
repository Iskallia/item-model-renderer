# Minecraft Item Model Renderer

A React-based 3D renderer for Minecraft item models using Three.js and React Three Fiber. This library renders Minecraft item models as 2D images that can be displayed in web applications.

## How It Works

### Architecture Overview

The renderer consists of several key components:

1. **ItemModelGlProvider** - Context provider that manages rendering state, texture loading, and image caching
2. **ItemModelDisplayer** - React component that displays rendered item models as images
3. **ItemModelRender** - Hidden canvas that performs the actual 3D rendering
4. **Cuboid** - Renders individual cuboid elements from the item model
5. **TextureLoader** - Handles loading and caching of Minecraft textures

### Rendering Pipeline

1. **Model Definition**: Item models are defined using Minecraft's JSON format with elements, textures, and display transformations
2. **Texture Resolution**: The renderer resolves texture references to actual image URLs
3. **Material Creation**: Each face of each cuboid gets its own material with the appropriate texture
4. **3D Rendering**: Three.js renders the model using orthographic projection
5. **Image Export**: The rendered result is converted to a PNG image
6. **Caching**: Rendered images are cached for performance

### Key Features

- **Minecraft Model Format**: Supports standard Minecraft item model JSON format
- **Texture Animation**: Handles animated textures via `.mcmeta` files
- **Display Transformations**: Supports all Minecraft display modes (gui, ground, firstperson, etc.)
- **Performance Optimized**: Caches rendered images and textures
- **Queue System**: Renders items sequentially to avoid GPU overload
- **Responsive**: Automatically adjusts to container size

## Installation

```bash
pnpm install @iskallia-dev/item-model-renderer
```

## Basic Usage

```tsx
import { ItemModelGlProvider, ItemModelDisplayer } from '@iskallia-dev/item-model-renderer';

// Define your texture resolver, this will provide the texture url for the given model id
const textureResolver = (resourceLocation: string) => {
  switch (resourceLocation) {
    case "minecraft:item/diamond_sword":
      return "/textures/diamond_sword.png";
    default:
      return "/textures/default.png";
  }
};

// Define your mcmeta resolver (for animated textures), this allows textures to be animated
const mcmetaResolver = async (resourceLocation: string) => {
  // Return mcmeta data or null for non-animated textures
  return null;
};

function App() {
  return (
    <ItemModelGlProvider
      resolveTextureUrl={textureResolver}
      resolveMcmeta={mcmetaResolver}
      zoomFactor={0.8}
    >
      <ItemModelDisplayer 
        itemId="sword1" 
        itemModel={diamondSwordModel} 
      />
    </ItemModelGlProvider>
  );
}
```

## Item Model Format

Item models follow the Minecraft JSON format:

```typescript
interface ItemModel {
  credit?: string;
  texture_size?: [number, number];
  textures: Record<string, string>;
  elements: ItemModelElement[];
  display: Partial<Record<ItemModelTransformationName, ItemModelTransformation>>;
}
```

### Example Model

```typescript
const swordModel: Minecraft.ItemModel = {
  texture_size: [64, 64],
  textures: {
    "0": "minecraft:item/diamond_sword"
  },
  elements: [
    {
      from: [7, 0, 7],
      to: [9, 32, 9],
      faces: {
        north: { uv: [0, 0, 2, 32], texture: "#0" },
        east: { uv: [2, 0, 4, 32], texture: "#0" },
        south: { uv: [4, 0, 6, 32], texture: "#0" },
        west: { uv: [6, 0, 8, 32], texture: "#0" },
        up: { uv: [8, 0, 10, 2], texture: "#0" },
        down: { uv: [10, 0, 12, 2], texture: "#0" }
      }
    }
  ],
  display: {
    gui: {
      rotation: [-30, 0, 0],
      scale: [0.5, 0.5, 0.5]
    }
  }
};
```

## API Reference

### ItemModelGlProvider Props

- `resolveTextureUrl: (resourceLocation: string) => string` - Function to resolve texture references to URLs, this will provide the texture url for the given model id
- `resolveMcmeta: (resourceLocation: string) => Promise<Mcmeta | null>` - Function to resolve animated texture metadata, this allows textures to be animated
- `itemModelTransform?: ItemModelTransformationName` - Which display transformation to use (default: "gui")
- `zoomFactor?: number` - Zoom multiplier (default: 1)
- `individualRenderWait?: number` - Wait time between renders in ms (default: 100)

### ItemModelDisplayer Props

- `itemId: string` - Unique identifier for the item
- `itemModel: ItemModel` - The Minecraft item model to render
- `renderedSize?: number` - Size of the rendered image (defaults to container width)
- `className?: string` - CSS class for the img element

### Display Transformations

- `gui` - For inventory/GUI display
- `ground` - For dropped items on ground
- `firstperson_righthand` - First person right hand
- `firstperson_lefthand` - First person left hand
- `thirdperson_righthand` - Third person right hand
- `thirdperson_lefthand` - Third person left hand
- `fixed` - Fixed display (item frames)
- `head` - For helmet items

## Advanced Features

### Animated Textures

Support animated textures via `.mcmeta` files:

```typescript
const mcmetaResolver = async (resourceLocation: string) => {
  if (resourceLocation === "minecraft:item/animated_item") {
    return {
      animation: {
        width: 16,
        height: 32,
        frametime: 2,
        frames: [0, 1, 2, 3]
      }
    };
  }
  return null;
};
```

### Custom Materials

The renderer uses custom `MeshMinecraftMaterial` that handles:
- UV coordinate mapping
- Texture animation
- Alpha testing
- Transparency

### Performance Optimization

- **Image Caching**: Rendered images are cached by itemId
- **Texture Caching**: Textures are cached by URL
- **Render Queue**: Items are rendered sequentially to prevent GPU overload
- **Lazy Loading**: Images are only rendered when needed

## Development

### Setup

```bash
git clone https://github.com/Iskallia/item-model-renderer
cd item-model-renderer
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

### Project Structure

```
lib/
├── context/
│   └── ItemModelGl.ctx.ts    # Context provider and state management
├── render/
│   ├── Cuboid.tsx            # Individual cuboid rendering
│   ├── ItemModelDisplayer.tsx # Image display component
│   ├── ItemModelRender.tsx   # Main rendering canvas
│   ├── MeshMinecraftMaterial.ts # Custom material
│   └── TextureLoader.ts      # Texture loading utilities
├── types.ts                  # TypeScript type definitions
└── main.tsx                  # Library exports
```

## Examples

See the `src/` directory for working examples including:
- Basic item models
- Complex multi-element models
- Animated textures
- Different display transformations

## License

CC BY-SA 4.0 