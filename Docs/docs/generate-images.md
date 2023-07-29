---
sidebar_position: 4
---

# Generating a New Image

Images can be generated using the following method:

```js

Kindly.Instance.GenerateImage(string prompt, string negativePrompt, int selectedModelID);

```

And must follow the following format when requesting a new image:

:::info Image Generation Request Class

```jsx
 public class GenerationRequest
{
    public string prompt;
    public string negative_prompt;
    public int model;
    public string apiKey;
}
```

:::

The resulting image will have the following format:

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

#### Example Code

```cs
using UnityEngine;
using MADD;

public class ImageGenerator : MonoBehaviour
{
    public InputField _if;
    public Button _generateBtn;
    public Model _selectedModel;

    private void OnEnable()
    {
        Kindly.Instance.OnImagesReceived += EnableBtn;
    }

    private void OnDisable()
    {
        if (!Kindly.Quitting)
            Kindly.Instance.OnImagesReceived -= EnableBtn;
    }

    public void GenerateStableDiffusion()
    {
        if (_selectedModel == null)
        {
            Debug.LogWarning("You gotta select a model first!");
            return;
        }
        string prompt = _if.text;
        Kindly.Instance.GenerateImage(prompt, "", _selectedModel.id);
        _generateBtn.interactable = false;
    }

    private void EnableBtn()
    {
        _generateBtn.interactable = true;
    }

    private void Start()
    {
        if (_selectedModel == null)
            _generateBtn.interactable = false;
    }

    public void SetModel(Model model)
    {
        _selectedModel = model;
    }
}
```
