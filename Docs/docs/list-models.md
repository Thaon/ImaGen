---
sidebar_position: 2
---

# Listing Image Generation Models

Models are usually loaded automatically on startup, but you can also download them manually.
Models will have the following format:

:::info Model Class

```jsx
public class Model
{
    public int id;
    public string name;
    public string description;
    public string image_url;
    public string[] triggers;
    public string[] categories;
}
```

:::

## Example

```csharp
using UnityEngine;
using MADD;

// Models are automatically downloaded on startup by default, but you can disable this and download them yourself
public class DownloadModels : MonoBehaviour
{
    void OnEnable()
    {
        ImaGen.Instance.OnModelsReceived += ListModels;
    }

    private void OnDisable()
    {
        if (!ImaGen.Quitting)
            ImaGen.Instance.OnModelsReceived -= ListModels;
    }

    public void DownloadModels()
    {
        ImaGen.Instance.GetModels();
    }

    private void ListModels()
    {
        foreach (var model in ImaGen.Instance._models_)
        {
            Debug.Log(model.name);
        }
    }
}
```
