# Passo 1
from unittest.mock import Mock, patch
from analyzer import analyze_json_file


def test_analyze_json_file():
    # Passo 2
    mock_read_json_file = Mock(return_value={"nome": "Maria", "idade": 31})
    fake_file_path = "invalid.json"

    # Passo 3
    with patch("analyzer.read_json_file", mock_read_json_file):
        result = analyze_json_file(fake_file_path)

    assert result == "A pessoa de nome Maria tem 31 anos de idade."
    mock_read_json_file.assert_called_with(fake_file_path)