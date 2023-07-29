---
sidebar_position: 3
---

# Listing Image Generations for a User

Image Generations can be listed using the following method:

```cs

Kindly.Instance.DownloadImages(int page, int pageSize);

```

They will have the following format:

:::info Image Generation Class

```cs
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

```cs
using UnityEngine;
using MADD;

// Downloads 5 images for the user and adds them to the _generations list inside of the Kindly object
public class DownloadImages : MonoBehaviour
{
    public int _page = 1;

    void OnEnable()
    {
        Kindly.Instance.OnImagesReceived += ListImages;
    }

    private void OnDisable()
    {
        if (!Kindly.Quitting)
            Kindly.Instance.OnImagesReceived -= ListImages;
    }

    public void DownloadMoreImages()
    {
        Kindly.Instance.DownloadImages(_page, 5);
        _page++;
    }

    private void ListImages()
    {
        foreach (var image in Kindly.Instance._generations)
        {
            Debug.Log(image.id + " - " + Kindly.Instance.ApiUrl + image.image.url);
        }
    }
}
```
