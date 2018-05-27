using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static GuildQuestAngular.Utils.KeysClass;

namespace GuildQuestAngular.Utils
{
    public class KeysClass
    {
        public interface IApiKeys
        {
             string GoogleMapKey { get; set; }
        }

        public class ApiKeys : IApiKeys
        {
            public string GoogleMapKey { get; set; }
        }
        public interface IKeyService
        {
             string GetGoogleKey();
        }

        public class KeyService : IKeyService
        {
            private readonly IApiKeys _apiKeys;

            public KeyService(IApiKeys apiKeys)
            {
                _apiKeys = apiKeys;
            }

            public IApiKeys Get()
            {
                return _apiKeys;

            }

            public string GetGoogleKey()
            {
                return _apiKeys.GoogleMapKey;
            }
        }
    }

}
