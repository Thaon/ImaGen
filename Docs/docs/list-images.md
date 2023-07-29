---
sidebar_position: 3
---

# Listing Image Generations for a User

Image Generations can be listed using the following method:

```js

ImaGen.Instance.DownloadImages(int page, int pageSize);

```

They will have the following format:

:::info Image Generation Class

```jsx
public class Generation
{
    public int id;
    public Image image;
    public string prompt;
    public Model sd_model;
}
```

:::

## Example

```csharp
using UnityEngine;
using MADD;

// Downloads 5 images for the user and adds them to the _generations list inside of the ImaGen object
public class DownloadImages : MonoBehaviour
{
    public int _page = 1;

    void OnEnable()
    {
        ImaGen.Instance.OnImagesReceived += ListImages;
    }

    private void OnDisable()
    {
        if (!ImaGen.Quitting)
            ImaGen.Instance.OnImagesReceived -= ListImages;
    }

    public void DownloadMoreImages()
    {
        ImaGen.Instance.DownloadImages(_page, 5);
        _page++;
    }

    private void ListImages()
    {
        foreach (var image in ImaGen.Instance._generations)
        {
            Debug.Log(image.id + " - " + ImaGen.Instance.ApiUrl + image.image.url);
        }
    }
}
```
