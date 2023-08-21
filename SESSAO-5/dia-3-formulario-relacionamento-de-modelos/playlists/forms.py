from django import forms
from playlists.models import Music
from playlists.validators import validate_music_length, validate_name_msc


class CreateMusicForm(forms.Form):
    # name = forms.CharField(max_length=50, validators=[validate_name_msc])
    # recorded_at = forms.DateField()
    # length_in_seconds = forms.IntegerField()
    name = forms.CharField(
        max_length=50,
        validators=[validate_name_msc],
        label="Nome da música",
    )
    recorded_at = forms.DateField(
        label="Data de gravação",
        widget=forms.DateInput(attrs={"type": "date"}),
        initial="2023-07-06",
    )
    length_in_seconds = forms.IntegerField(
        validators=[validate_music_length],
        label="Duração em segundos",
    )


class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()
    length_in_seconds = forms.IntegerField(validators=[validate_music_length])


class CreateSingerForm(forms.Form):
    name = forms.CharField(max_length=50)


class CreateMusicModelForm(forms.ModelForm):
    class Meta:
        model = Music
        fields = '__all__'
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["name"].label = "Nome da música"
        self.fields["recorded_at"].label = "Data de gravação"
        self.fields["recorded_at"].widget = forms.DateInput(
                attrs={"type": "date"})
        self.fields["recorded_at"].initial = "2023-07-06"
        self.fields["length_in_seconds"].label = "Duração em segundos"
        self.fields["singer"].label = "Artista"
        self.fields["singer"].widget = forms.Select(
            choices=[
                (singer.id, singer.name)
                for singer in Singer.objects.filter(name__contains="a")
            ]
        )