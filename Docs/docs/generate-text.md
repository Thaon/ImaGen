---
sidebar_position: 5
---

# Generating Text

Text can be generated using the following method:

```cs

Kindly.Instance.GenerateText(string prompt);

```

And must follow the following format when requesting a text response:

:::info Text Generation Request Class

```cs
 public class TextGenerationRequest
{
    public string prompt;
    public string apiKey;
}
```

:::

The resulting text will have the following format:

:::info Text Generation Class

```cs
public class TextGenerationResponse
{
    public string status; // can be OK or KO
    public string text;
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
        Kindly.Instance.OnTextReceived += PrintText;
    }

    private void OnDisable()
    {
        if (!Kindly.Quitting)
            Kindly.Instance.OnTextReceived -= PrintText;
    }

    public void PrintText()
    {
        Debug.Log(Kindly.Instance._generatedText);
    }

    private void Start()
    {
        Kindly.Instance.GenerateText("Hello world! how are you today?");
    }
}
```
